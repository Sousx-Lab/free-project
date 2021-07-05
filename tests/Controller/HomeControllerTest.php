<?php
namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class HomeControllerTest extends WebTestCase
{
    private KernelBrowser $client;

    protected function setUp(): void
    {
        $this->client = static::createClient();
    }

    private function getRoute(array $params = [], int $path = 1 ): string
    {
        /**@var UrlGeneratorInterface */
        $router = $this->client->getContainer()->get('router');
        $route = $_ENV["HOMEPAGE_ROUTE"];
        return $router->generate($route, $params, $path);
    }

    public function test_HomePageRoute(): void
    {
        $this->client->request('GET', $this->getRoute());
        $this->assertMatchesRegularExpression('/Bonjour, je suis./', $this->client->getResponse()->getContent());
        $this->assertResponseIsSuccessful();
    }
}