<?php
namespace App\Tests\Controller\ContactController;


use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ContactControllerTest extends WebTestCase
{
    private KernelBrowser $client;

    const CONTACT_ROUTE = "contact_route";

    protected function setUp(): void
    {
        $this->client = static::createClient();
    }

    private function getRoute(array $params = [], int $path = 1 ): string
    {
        /**@var UrlGeneratorInterface */
        $router = $this->client->getContainer()->get('router');
        return $router->generate(self::CONTACT_ROUTE, $params, $path);
    }

    public function test_ContactRoute() :void
    {
       $this->client->request('GET', $this->getRoute());
       $this->assertResponseIsSuccessful();
    }
}