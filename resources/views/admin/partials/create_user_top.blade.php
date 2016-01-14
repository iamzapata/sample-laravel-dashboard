<form id="userForm">
    <div class="row">
        <!-- left section -->
        <div class="col-md-4">
            <div class="form-group col-md-8">
                {{ Form::label('username','Username') }}
                {{ Form::text('username',null,array('class'=>'form-control')) }}
                <span class="validation-error"></span>
            </div>
            <div class="form-group col-md-8">
                {{ Form::label('email','Email') }}
                {{ Form::text('email',null,array('class'=>'form-control')) }}
                <span class="validation-error"></span>
            </div>
            <div class="form-group col-md-8">
                {{ Form::label('password','Password') }}
                {{ Form::password('password',array('class'=>'form-control')) }}
                <span class="validation-error"></span>
            </div>
            <div class="form-group col-md-8">
                {{ Form::label('password','Retype Password') }}
                {{ Form::password('password_confirmation',array('class'=>'form-control')) }}
                <span class="validation-error"></span>
            </div>
        </div>
</form>
        <!-- end of left section -->

        <!-- middle section -->
        <div class="col-md-4">
        </div>
        <!-- end of middle section -->

        <!-- right section -->
        <div class="col-md-4">
        </div>
        <!-- end of right section -->
    </div>
