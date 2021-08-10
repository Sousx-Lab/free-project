<?php

namespace App\Controller\ContactController;

use App\Form\ContactType;
use App\Entity\Contact\ContactData;
use Symfony\Component\Form\FormError;
use App\Services\Contact\ContactMailer;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ContactController extends AbstractController
{

    /**
     * @Route("/contact", name="contact_route", methods={"GET","POST"})
     * @return Response
     */
    public function send(Request $request, ContactMailer $contactMailer): Response
    {
        $contact = new ContactData();
        $form = $this->createForm(ContactType::class, $contact);
        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) {
            
            try {
                $contactMailer->sendEmail($contact);
                $this->addFlash('success', "Merci. Votre message a bien été envoyé !");
                return $this->redirectToRoute('homepage_route', [], Response::HTTP_SEE_OTHER);
            } catch (\Symfony\Component\Mailer\Exception\TransportException $e) {

                $form->addError(new FormError("Une erreur s'est produite lors de l'envoi, réessayez plus tard !"));
                return new Response(
                    $this->renderView('contact/contact.html.twig', [
                        'form' =>  $form->createView()
                    ]),
                    Response::HTTP_UNPROCESSABLE_ENTITY
                );
            }
        }
        if ($form->isSubmitted() && !$form->isValid()) {
            return new Response(
                $this->renderView('contact/contact.html.twig', [
                    'form' =>  $form->createView()
                ]),
                Response::HTTP_UNPROCESSABLE_ENTITY
            );
        }

        return $this->render('contact/contact.html.twig', [
            'form' =>  $form->createView()
        ]);
    }
}
