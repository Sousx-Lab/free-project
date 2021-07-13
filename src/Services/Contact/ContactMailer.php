<?php

namespace App\Services\Contact;

use Twig\Environment;
use Symfony\Component\Mime\Email;
use App\Entity\Contact\ContactData;
use Symfony\Component\Mailer\MailerInterface;

final class ContactMailer
{
    private MailerInterface $mailer;

    private Environment $twig;

    public function __construct(MailerInterface $mailer, Environment $twig)
    {
        $this->mailer = $mailer;
        $this->twig = $twig;
    }

    public function sendEmail(ContactData $contact): void
    {
        $email = (new Email())
            ->subject('Nouveau contact Portfolio')
            ->html($this->twig->render('contact/email.contact.html.twig',[
                'name' => $contact->getName(),
                'email' => $contact->getEmail(), 
                'message' => $contact->getDescription()
            ]));
        
        $this->mailer->send($email);
        
    }
}
