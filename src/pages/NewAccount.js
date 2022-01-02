import React from 'react';


function NewAccount() {
    
    return (
        <section class="bg-light">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-5 col-md-5 col-sm-11">
                        <div class="shadow p-40 login bg-white">

                            <h4 class="text-left mb-3 font-w-5">Create Account</h4>
                            <form id="contact-form">

                                <div class="form-group">
                                    <label>Your Name</label>
                                    <input id="form_name" type="text" name="name" class="form-control"></input>
                                </div>
                                <div class="form-group">
                                    <label>Mobile Number</label>
                                    <input id="form_mobileno" type="number" name="mobileno" class="form-control" ></input>
                                </div>
                                <div class="form-group">
                                    <label>Email (optional)</label>
                                    <input id="form_email" type="text" name="email" class="form-control" ></input>
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input id="form_password" type="password" name="password" placeholder="at least 6 characters" class="form-control" ></input>
                                </div>
                                <a href="#" class="btn btn-primary btn-block">Create Account</a>


                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewAccount