<?php
namespace App\Controller\ContactController;


use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ContactController extends AbstractController
{
    
    /**
     * @Route("/contact", name="contact_route", methods={"GET","POST"})
     * @return Response
     */
    public function send(Request $request): Response
    {
        return $this->render('contact/contact.html.twig', []);
    }
}