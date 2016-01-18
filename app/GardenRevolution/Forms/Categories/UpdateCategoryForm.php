<?php

namespace App\GardenRevolution\Forms\Categories;

use App\GardenRevolution\Forms\Form;

class UpdateCategoryForm extends Form
{
    public function getPreparedRules() 
    {
        return [
            'common_name'=>'required',
            'botanical_name'=>'required'
        ];
    }
}
