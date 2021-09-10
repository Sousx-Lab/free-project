<?php
namespace App\Services\Contact\Exception;


use Symfony\Component\Mailer\Exception\TransportException;

class ContactMailerException extends TransportException{

    public function getMessageKey()
    {
        return "Une erreur est survenue lors de l'envoi du message, veuillez réessayer plus tard !";
    }
    
}