<?php

namespace App\Entity\Contact;

use Symfony\Component\Validator\Constraints as Assert;

class ContactData
{

    /**
     * @Assert\NotBlank(message="Veuillez renseigner votre Nom !")
     */
    private string $name;

    /**
     * @Assert\NotBlank(message="L'adresse email est nécessaire pour pouvoir vous répondre !")
     * @Assert\Email(message="L'email n'est pas valide !")
     */
    private string $email;

    /**
     * @Assert\NotBlank(message="Veuillez détailler l'objet de votre contact !")
     * @Assert\Length(min=8, minMessage="Veuillez détailler l'objet de votre contact, au moins 20 caractères")
     */
    private string $description;

    /**
     * Get the value of name
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @return self
     */
    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get the value of email
     */
    public function getEmail(): string
    {
        return $this->email;
    }

    /**
     * @return self
     */
    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get the value of description
     */
    public function getDescription(): string
    {
        return $this->description;
    }

    /**
     * @return self
     */
    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }
}
