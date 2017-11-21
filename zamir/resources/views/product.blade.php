<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <form class="" action="{{route('product.store')}}" method="post" enctype="multipart/form-data">
      <input type="hidden" name="_token" value="<?php echo csrf_token(); ?>">
      <label for="title">Title</label>
      <input type="text" name="title" value="">
      <label for="price">Price</label>
      <input type="text" name="price" value="">
      <label for="category_id">cat</label>
      <input type="text" name="category_id" value="">
      <input type="file" name="image" value="" >
      <input type="submit" name="" value="Submit">
    </form>

  </body>
</html>
