<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Category;
class Product extends Model
{
    //
    protected $fillable = ['admin_id','title','subtitle','category_id','desp','brand','price'];

    public function category(){
      return $this->belongsTo(Category::class);
    }

    // public function admin(){
    //   return $this->belongsTo(Admin::class);
    // }
}
