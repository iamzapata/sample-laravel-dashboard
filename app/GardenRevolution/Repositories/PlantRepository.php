<?php

namespace App\GardenRevolution\Repositories;

use App\Models\Plant;
use App\GardenRevolution\Repositories\Contracts\PlantRepositoryInterface;

class PlantRepository implements PlantRepositoryInterface {

    /**
     * @var Plant
     */
    private $plant;

    public function __construct(Plant $plant)
    {
        $this->plant = $plant;
    }

    /**
     * @param array $data
     *
     * @return bool
     */
    public function create(array $data) {
        var_dump($data);
        
        $this->plant = $this->plant->newInstance()->fill($data);
        $this->plant->save();

        return $this->plant;
    }

    /**
     * @param array $data
     * @param       $id
     *
     * @return bool
     */
    public function update(array $data, $id)
    {
        $this->plant = $this->plant->newInstance()->find($id);

        if( is_null($this->plant) ) {
            return false;
        }

        $this->plant->fill($data);

        return $this->plant->save();
    }

    /**
     * @param       $id
     * @param array $columns
     *a
     * @return mixed
     */
    public function find($id, $columns = array('*'))
    {
        $eagerLoads = [
            'categories',

            'subcategories',

            'maintenance',

            'averagesize',

            'growthrate',

            'sunexposure',

            'sponsor',

            'zone',

            'soils',

            'type',

            'tolerations',

            'searchablenames',

            'negativetraits',

            'positivetraits'];

        $this->plant = $this->plant->newInstance()->with($eagerLoads)->find($id, $columns);

        return $this->plant;

    }

    /**
     * @param $id
     *
     * @return bool|null
     * @throws \Exception
     */
    public function delete($id)
    {
        $this->plant = $this->plant->newInstance()->find($id);

        if( is_null($this->plant) )
        {
            return false;
        }

        return $this->plant->delete();

    }

    /**
     * @return mixed
     */
    public function getAll()
    {
        return $this->plant->with(
            'categories',
            'subcategories',
            'maintenance',
            'averagesize',
            'growthrate',
            'sunexposure',
            'sponsor',
            'zone',
            'soils',
            'type',
            'tolerations',
            'searchablenames',
            'negativetraits',
            'positivetraits')->get();
    }

    /**
     * @param int $pages
     * @param Contracts\Array|array $eagerLoads
     *
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
        public function getAllPaginated($pages = 15, Array $eagerLoads = [])
    {
        return $this->plant->newInstance()
                    ->with($eagerLoads)
                    ->orderBy('created_at', 'desc')
                    ->paginate($pages);
    }


}