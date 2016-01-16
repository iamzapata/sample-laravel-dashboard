<h1>Change Notification Settings</h1>
<div class="row well">
    <!-- left section -->
    <div class="col-md-4">
        <div class="col-md-12">
            <div class="checkbox">
                <label>
                    {{ Form::checkbox('receive_emails',null,false,array('class'=>'setting-field disabled')) }}
                    Receive Emails
                </label>
                <span class="validation-error"></span>
            </div>
        </div>
        <div class="col-md-12">
            <div class="checkbox">
                <label>
                    {{ Form::checkbox('receive_text_alerts',null,false,array('class'=>'setting-field disabled')) }}
                    Receive Text Alerts
                </label>
                <span class="validation-error"></span>
            </div>
        </div>
        <div class="col-md-12">
            <div class="checkbox">
                <label>
                    {{ Form::checkbox('google_ical_alerts',null,false,array('class'=>'setting-field disabled')) }}
                    Google and iCal Alerts
                </label>
                <span class="validation-error"></span>
            </div>
        </div>
        <div class="col-md-12">
            <div class="checkbox">
                <label>
                    {{ Form::checkbox('receive_push_alerts',null,false,array('class'=>'setting-field disabled')) }}
                    Receive Push Alerts
                </label>
                <span class="validation-error"></span>
            </div>
        </div>
    </div>
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
