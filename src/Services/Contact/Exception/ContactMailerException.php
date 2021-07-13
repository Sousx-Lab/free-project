<?php
namespace App\Services\Contact\Exception;


use Symfony\Component\Mailer\Exception\TransportException;

class ContactMailerException extends TransportException{

    public function getMessageKey()
    {
        return 'Message non envoyé !';
    }
    
}