<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Category;
class Product extends Model
{
    //
    protected $fillable = ['title','price','category_id'];
    public function category(){
      return $this->belongsTo(Category::class);
    }

    // public function admin(){
    //   return $this->belongsTo(Admin::class);
    // }
}
