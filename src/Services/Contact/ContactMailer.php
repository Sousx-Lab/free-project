<?php

namespace App\Services\Contact;

use Twig\Environment;
use Symfony\Component\Mime\Email;
use App\Entity\Contact\ContactData;
use App\Services\Contact\Exception\ContactMailerException;
use Symfony\Component\Mailer\Transport\TransportInterface;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;

final class ContactMailer
{
    private TransportInterface $mailer;

    private Environment $twig;

    public function __construct(TransportInterface $mailer, Environment $twig)
    {
        $this->mailer = $mailer;
        $this->twig = $twig;
    }

    public function sendEmail(ContactData $contact): void
    {

        $email = (new Email())
            ->subject('Nouveau contact Portfolio')
            ->html($this->twig->render('contact/email.contact.html.twig', [
                'name' => $contact->getName(),
                'email' => $contact->getEmail(),
                'message' => $contact->getDescription()
            ]));
        try {

            $this->mailer->send($email);
        } catch (TransportExceptionInterface $e) {
            throw new ContactMailerException();
        }
    }
}
