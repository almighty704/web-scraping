import React from 'react';
import { Link } from 'react-router-dom';
import './MyProfile.scss';

const MyProfile = () => {
  return (
    <div className='my-profile'>
      <div className='header pb-8 pt-5 pt-lg-8 d-flex align-items-center'>
        <span className='mask bg-gradient-default opacity-8'></span>
      </div>
      <div className='container-fluid mt--7'>
        <div className='row'>
          <div className='col-xl-4 order-xl-2 mb-5 mb-xl-0'>
            <div className='card card-profile shadow'>
              <div className='row justify-content-center'>
                <div className='col-lg-3 order-lg-2'>
                  <div className='card-profile-image'>
                    <Link to='/'>
                      <img
                        src='https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg'
                        className='rounded-circle'
                        alt='imagexsa'
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className='card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4'>
                <div className='d-flex justify-content-between'>
                  <Link to='#' className='btn btn-sm btn-info mr-4'>
                    Connect
                  </Link>
                  <Link to='#' className='btn btn-sm btn-default float-right'>
                    Message
                  </Link>
                </div>
              </div>
              <div className='card-body pt-0 pt-md-4'>
                <div className='row'>
                  <div className='col'>
                    <div className='card-profile-stats d-flex justify-content-center mt-md-5'>
                      <div>
                        <span className='heading'>22</span>
                        <span className='description'>Friends</span>
                      </div>
                      <div>
                        <span className='heading'>10</span>
                        <span className='description'>Photos</span>
                      </div>
                      <div>
                        <span className='heading'>89</span>
                        <span className='description'>Comments</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='text-center'>
                  <h3>
                    Jessica Jones<span className='font-weight-light'>, 27</span>
                  </h3>
                  <div className='h5 font-weight-300'>
                    <i className='ni location_pin mr-2'></i>Bucharest, Romania
                  </div>
                  <div className='h5 mt-4'>
                    <i className='ni business_briefcase-24 mr-2'></i>Solution
                    Manager - Creative Tim Officer
                  </div>
                  <div>
                    <i className='ni education_hat mr-2'></i>University of
                    Computer Science
                  </div>
                  <p>
                    Ryan — the name taken by Melbourne-raised, Brooklyn-based
                    Nick Murphy — writes, performs and records all of his own
                    music.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-8 order-xl-1'>
            <div className='card bg-secondary shadow'>
              <div className='card-header bg-white border-0'>
                <div className='row align-items-center'>
                  <div className='col-8'>
                    <h3 className='mb-0'>My account</h3>
                  </div>
                  <div className='col-4 text-right'>
                    <a href='#!' className='btn btn-sm btn-primary'>
                      Settings
                    </a>
                  </div>
                </div>
              </div>
              <div className='card-body'>
                <form>
                  <h6 className='heading-small text-muted mb-4'>
                    User information
                  </h6>
                  <div className='pl-lg-4'>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <div className='form-group focused'>
                          <label className='form-control-label'>Username</label>
                          <input
                            type='text'
                            id='input-username'
                            className='form-control form-control-alternative'
                            placeholder='Username'
                            value='lucky.jesse'
                          />
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='form-group'>
                          <label className='form-control-label'>
                            Email address
                          </label>
                          <input
                            type='email'
                            id='input-email'
                            className='form-control form-control-alternative'
                            placeholder='jesse@example.com'
                          />
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <div className='form-group focused'>
                          <label className='form-control-label'>
                            First name
                          </label>
                          <input
                            type='text'
                            id='input-first-name'
                            className='form-control form-control-alternative'
                            placeholder='First name'
                            value='Lucky'
                          />
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='form-group focused'>
                          <label className='form-control-label'>
                            Last name
                          </label>
                          <input
                            type='text'
                            id='input-last-name'
                            className='form-control form-control-alternative'
                            placeholder='Last name'
                            value='Jesse'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <h6 className='heading-small text-muted mb-4'>
                    Contact information
                  </h6>
                  <div className='pl-lg-4'>
                    <div className='row'>
                      <div className='col-md-12'>
                        <div className='form-group focused'>
                          <label className='form-control-label'>Address</label>
                          <input
                            id='input-address'
                            className='form-control form-control-alternative'
                            placeholder='Home Address'
                            value='Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09'
                            type='text'
                          />
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-lg-4'>
                        <div className='form-group focused'>
                          <label className='form-control-label'>City</label>
                          <input
                            type='text'
                            id='input-city'
                            className='form-control form-control-alternative'
                            placeholder='City'
                            value='New York'
                          />
                        </div>
                      </div>
                      <div className='col-lg-4'>
                        <div className='form-group focused'>
                          <label className='form-control-label'>Country</label>
                          <input
                            type='text'
                            id='input-country'
                            className='form-control form-control-alternative'
                            placeholder='Country'
                            value='United States'
                          />
                        </div>
                      </div>
                      <div className='col-lg-4'>
                        <div className='form-group'>
                          <label className='form-control-label'>
                            Postal code
                          </label>
                          <input
                            type='number'
                            id='input-postal-code'
                            className='form-control form-control-alternative'
                            placeholder='Postal code'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <h6 className='heading-small text-muted mb-4'>About me</h6>
                  <div className='pl-lg-4'>
                    <div className='form-group focused'>
                      <label>About Me</label>
                      <textarea
                        className='form-control form-control-alternative'
                        placeholder='A few words about you ...'
                      >
                        A beautiful Dashboard for Bootstrap 4. It is Free and
                        Open Source.
                      </textarea>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
