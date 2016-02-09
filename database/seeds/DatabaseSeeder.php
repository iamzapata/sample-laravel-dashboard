<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();
        DB::beginTransaction();
	    DB::statement("SET foreign_key_checks = 0");
        $this->call(RoleTableSeeder::class);
        $this->call(UserTableSeeder::class);
        $this->call(SponsorTableSeeder::class);
        $this->call(SoilTableSeeder::class);
        $this->call(ZoneTableSeeder::class);
        $this->call(SearchableNameTableSeeder::class);
        $this->call(PlantAverageSizeTableSeeder::class);
        $this->call(PlantGrowthRateTableSeeder::class);
        $this->call(PlantMaintenanceTableSeeder::class);
        $this->call(PlantNegativeTraitTableSeeder::class);
        $this->call(PlantPositiveTraitTableSeeder::class);
        $this->call(PlantSunExposureTableSeeder::class);
        $this->call(PlantTolerationTableSeeder::class);
        $this->call(PlantTypeTableSeeder::class);
        $this->call(PlantMoistureTableSeeder::class);
        $this->call(PlantTableSeeder::class);
        $this->call(StateTableSeeder::class);
        $this->call(PestSeveritiesTableSeeder::class);
        $this->call(PestTableSeeder::class);
        $this->call(ProcedureUrgenciesTableSeeder::class);
        $this->call(ProcedureFrequenciesTableSeeder::class);
        $this->call(ProcedureTableSeeder::class);
        $this->call(AlertUrgenciesTableSeeder::class);
        $this->call(TermTableSeeder::class);
        DB::statement("SET foreign_key_checks = 1");
        Model::reguard();
    }
}
