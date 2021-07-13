<?php

namespace App\Form;

use App\Entity\Contact\ContactData;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ContactType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class,)
            ->add('email', EmailType::class)
            ->add('description', TextareaType::class, [
                'attr' => [
                    'placeholder' => "Description de votre projet",
                    'aria-label' => "Description du projet",
                    'minlength' => "20"
                ]
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ContactData::class,
            'csrf_protection' => true
        ]);
    }

    public function getBlockPrefix(): string
    {
        return '';
    }
}
