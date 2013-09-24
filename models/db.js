'use strict';

var Sequelize = require('sequelize');
var sequelize = new Sequelize('phantomrunner', 'root');

var Users = sequelize.define('Users',{
  id: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
  email: {type: Sequelize.STRING, allowNull: false, defaultValue: ''},
  encrypted_password: {type: Sequelize.STRING, allowNull: false, defaultValue: ''},
  reset_password_token: {type: Sequelize.STRING, defaultValue: null, unique: true},
  reset_password_sent_at: {type: Sequelize.DATE, defaultValue: null},
  remember_created_at: {type: Sequelize.DATE, defaultValue: null},
  sign_in_count: {type: Sequelize.INTEGER, defaultValue: 0},
  current_sign_in_at: {type: Sequelize.DATE, defaultValue: null},
  last_sign_in_at: {type: Sequelize.DATE, defaultValue: null},
  current_sign_in_ip: {type: Sequelize.STRING, defaultValue: null},
  last_sign_in_ip: {type: Sequelize.STRING, defaultValue: null},
  // created_at: {type: Sequelize.DATE, allowNull: false},
  // updated_at: {type: Sequelize.DATE, allowNull: false},
  admin: {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: 0},
  first_name: {type: Sequelize.STRING, allowNull: false},
  last_name: {type: Sequelize.STRING, allowNull: false},
  gender: {type: Sequelize.STRING, allowNull: false},
  state: {type: Sequelize.STRING, defaultValue: null},
  birthday: {type: Sequelize.DATE, defaultValue: null},
  time_zone: {type: Sequelize.STRING, allowNull: false},
  vagrant: {type: Sequelize.BOOLEAN, defaultValue: null},
  favorite_shoe: {type: Sequelize.STRING, defaultValue: null},
  shipping_address_id: {type: Sequelize.INTEGER, defaultValue: null},
  race_manager: {type: Sequelize.BOOLEAN, defaultValue: 0},
  auto_submission: {type: Sequelize.BOOLEAN, defaultValue: 1},
  confirmation_token: {type: Sequelize.STRING, defaultValue: null, unique: true},
  confirmed_at: {type: Sequelize.DATE, defaultValue: null},
  confirmation_sent_at: {type: Sequelize.DATE, defaultValue: null},
  unconfirmed_email: {type: Sequelize.STRING, defaultValue: null},
  referral_credit: {type: Sequelize.DECIMAL(10,2), defaultValue: '0.00'}
}, {
  getterMethods: {
    createdAt: function() {
      return this.getDataValue('created_at');
    },
    updatedAt: function() {
      return this.getDataValue('updated_at');
    }
  },
  setterMethods: {
    createdAt: function(t) {
      return this.setDataValue('created_at',t);
    },
    updatedAt: function(t) {
      return this.setDataValue('updated_at',t);
    }
  }
});

var Races = sequelize.define('Races',{
  id: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
  name: { type: Sequelize.STRING, allowNull: false},
  registration_opens_at: { type: Sequelize.DATE, defaultValue: null},
  registration_closes_at: { type: Sequelize.DATE, defaultValue: null},
  event_starts_at: { type: Sequelize.DATE, defaultValue: null},
  event_ends_at: { type: Sequelize.DATE, defaultValue: null},
  created_at: { type: Sequelize.DATE, allowNull: false},
  updated_at: { type: Sequelize.DATE, allowNull: false},
  results_manually_published_at: { type: Sequelize.DATE, defaultValue: null},
  autopublish_results_after_days: { type: Sequelize.INTEGER, defaultValue: null},
  main_image_file_name: { type: Sequelize.STRING, defaultValue: null},
  main_image_content_type: { type: Sequelize.STRING, defaultValue: null},
  main_image_file_size: { type: Sequelize.INTEGER, defaultValue: null},
  main_image_updated_at: { type: Sequelize.DATE, defaultValue: null},
  description: { type: Sequelize.TEXT},
  show_normalized_results: { type: Sequelize.INTEGER, defaultValue: null},
  course_uphill_ft: { type: Sequelize.FLOAT, defaultValue: 0},
  course_downhill_ft: { type: Sequelize.FLOAT, defaultValue: 0},
  course_starting_altitude_ft: { type: Sequelize.FLOAT, defaultValue: 0},
  course_temp_f: { type: Sequelize.FLOAT, defaultValue: 60},
  early_registration_fee: { type: Sequelize.DECIMAL(10,2), defaultValue: null},
  registration_fee: { type: Sequelize.DECIMAL(10,2), defaultValue: null},
  early_registration_deadline: { type: Sequelize.DATE, defaultValue: null},
  manager_id: { type: Sequelize.INTEGER, defaultValue: null},
  wizard_step: { type: Sequelize.INTEGER, defaultValue: null},
  custom_waiver: { type: Sequelize.STRING, defaultValue: null},
  public: { type: Sequelize.BOOLEAN, defaultValue: null},
  organizer_name: { type: Sequelize.STRING, defaultValue: null},
  organizer_email: { type: Sequelize.STRING, defaultValue: null},
  organizer_website: { type: Sequelize.STRING, defaultValue: null},
  facebook_url: { type: Sequelize.STRING, defaultValue: null},
  twitter_url: { type: Sequelize.STRING, defaultValue: null},
  short_description: { type: Sequelize.STRING, defaultValue: null},
  charity_name: { type: Sequelize.STRING, defaultValue: null},
  direct_donation_url: { type: Sequelize.STRING, defaultValue: null},
  third_party: { type: Sequelize.BOOLEAN, defaultValue: 0},
  credit_card_fee_included: { type: Sequelize.BOOLEAN, defaultValue: 0},
  conversion_credit: { type: Sequelize.DECIMAL(10,2), defaultValue: 0.00},
});

var Race_Users = sequelize.define('Race_Users', {
  id: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
  race_id: { type: Sequelize.INTEGER, defaultValue: null},
  user_id: { type: Sequelize.INTEGER, defaultValue: null},
  race_kind_id: { type: Sequelize.INTEGER, defaultValue: null},
  remain_anonymous: { type: Sequelize.BOOLEAN, defaultValue: null},
  created_at: { type: Sequelize.DATE, defaultValue: null},
  updated_at: { type: Sequelize.DATE, defaultValue: null},
  run_time_secs: { type: Sequelize.FLOAT, defaultValue: null},
  run_state: { type: Sequelize.STRING, defaultValue: null},
  run_distance_mi: { type: Sequelize.FLOAT, defaultValue: null},
  run_submission_type: { type: Sequelize.STRING, defaultValue: null},
  run_time_submitted_at: { type: Sequelize.DATE, defaultValue: null},
  run_submission_uri: { type: Sequelize.STRING, defaultValue: null},
  registered_by_user_id: { type: Sequelize.INTEGER, defaultValue: null},
  terms_signature: { type: Sequelize.STRING, defaultValue: null},
  run_starting_altitude_ft: { type: Sequelize.FLOAT, defaultValue: null},
  run_starting_lat: { type: Sequelize.FLOAT, defaultValue: null},
  run_starting_lng: { type: Sequelize.FLOAT, defaultValue: null},
  run_starting_temp_f: { type: Sequelize.FLOAT, defaultValue: null},
  run_uphill_ft: { type: Sequelize.FLOAT, defaultValue: null},
  run_downhill_ft: { type: Sequelize.FLOAT, defaultValue: null},
  run_started_at: { type: Sequelize.DATE, defaultValue: null},
  run_time_flat_secs: { type: Sequelize.FLOAT, defaultValue: null},
  run_time_normalized_secs: { type: Sequelize.FLOAT, defaultValue: null},
  normalization_exceptions: { type: Sequelize.INTEGER, defaultValue: null},
  paid: { type: Sequelize.BOOLEAN, defaultValue: null},
  ru_shipping_first_name: { type: Sequelize.STRING, defaultValue: null},
  ru_shipping_last_name: { type: Sequelize.STRING, defaultValue: null},
  ru_shipping_address1: { type: Sequelize.STRING, defaultValue: null},
  ru_shipping_address2: { type: Sequelize.STRING, defaultValue: null},
  ru_shipping_city: { type: Sequelize.STRING, defaultValue: null},
  ru_shipping_state: { type: Sequelize.STRING, defaultValue: null},
  ru_shipping_zip: { type: Sequelize.STRING, defaultValue: null},
  tshirt_size: { type: Sequelize.STRING, defaultValue: null},
  confirmed: { type: Sequelize.BOOLEAN, defaultValue: 0},
  accepted_u18_waiver: { type: Sequelize.BOOLEAN, defaultValue: 0},
  user_under_18: { type: Sequelize.BOOLEAN, defaultValue: 0},
  accepted_custom_waviers: { type: Sequelize.BOOLEAN, defaultValue: 0},
  share: { type: Sequelize.INTEGER, defaultValue: 0},

});


var ckeditor_assets = sequelize.define('ckeditor_assets',{
  id: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
  data_file_name: { type: Sequelize.STRING, allowNull: false },
  data_content_type: { type: Sequelize.STRING, defaultValue: null },
  data_file_size: { type: Sequelize.INTEGER, defaultValue: null },
  assetable_id: { type: Sequelize.INTEGER, defaultValue: null },
  assetable_type: { type: Sequelize.STRING(30), defaultValue: null },
  type: { type: Sequelize.STRING(30), defaultValue: null },
  width: { type: Sequelize.INTEGER, defaultValue: null },
  height: { type: Sequelize.INTEGER, defaultValue: null },
  created_at: { type: Sequelize.DATE, allowNull: false },
  updated_at: { type: Sequelize.DATE, allowNull: false },

});

var identities = sequelize.define('identities', {
  id: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
  uid: { type: Sequelize.STRING, defaultValue: null},
  provider: { type: Sequelize.STRING, defaultValue: null},
  user_id: { type: Sequelize.INTEGER, defaultValue: null},
  token: { type: Sequelize.STRING, defaultValue: null}
})

module.exports = {
    Users: Users,
    Races: Races,
    Race_Users: Race_Users,
    ckeditor_assets: ckeditor_assets
};