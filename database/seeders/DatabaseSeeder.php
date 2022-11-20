<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        $this->call(CategoriesTableSeeder::class);
        $this->call(PositionsTableSeeder::class);
        $this->call(PaymentMethodsTableSeeder::class);
        $this->call(PermissionsTableSeeder::class);
        $this->call(PermissionDetailsTableSeeder::class);
        $this->call(PromotionsTableSeeder::class);
        $this->call(AuthorsTableSeeder::class);
        $this->call(PublishersTableSeeder::class);
        $this->call(PartnersTableSeeder::class);
        $this->call(BookTitlesTableSeeder::class);
        $this->call(CategoryBooksTableSeeder::class);
        $this->call(BooksTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(ImportsTableSeeder::class);
        $this->call(ImportDetailsTableSeeder::class);
    }
}