<?php
namespace App\Controller\PortfolioController;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="homepage_route")
     * @return Response
     */
    public function home(): Response
    {
        return $this->render('portfolio/homepage.html.twig', []);
    }
}