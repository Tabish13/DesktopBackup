<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    @if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif

    <form class="" action="{{route('product.store')}}" method="post" enctype="multipart/form-data">
      <input type="hidden" name="_token" value="<?php echo csrf_token(); ?>">
      <label for="adminid">adminid</label>
      <input type="text" name="admin_id" value="1">
      <br>
      <label for="title">Title</label>
      <input type="text" name="title" value="">
      <br>
      <label for="subtitle">Subtitle</label>
      <input type="text" name="subtitle" value="">
      <br>
      <label for="category_id">cat</label>
      <select class="" name="category_id">

        @foreach ($categories as $id => $category)
          <option value="{{$id}}">{{$category}}</option>
        @endforeach
      </select>
      <br>
      <label for="desp">Desp</label>
      <input type="text" name="desp" value="">
      <br>
      <label for="brand">Brand</label>
      <input type="text" name="brand" value="">
      <br>
      <label for="price">Price</label>
      <input type="text" name="price" value="">
      <br>
      <input type="file" name="image" value="" >
      <br>
      <input type="submit" name="" value="Submit">
    </form>

  </body>
</html>
