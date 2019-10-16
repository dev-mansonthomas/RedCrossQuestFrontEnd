export class Queteur {
  public id                          :number;
  public email                       :string;
  public first_name                  :string;
  public last_name                   :string;
  public secteur                     :number;
  public nivol                       :string;
  public mobile                      :string;
  public created                     :Date;
  public updated                     :Date;
  public notes                       :string;
  public ul_id                       :number;
  public ul_name                     :string;
  public ul_longitude                :number;
  public ul_latitude                 :number;

  public point_quete_id              :number;
  public point_quete_name            :string;
  public depart_theorique            :Date;
  public depart                      :Date;
  public retour                      :Date;

  public active                      :boolean;
  public man                         :boolean;
  public birthdate                   :Date;
  public qr_code_printed             :boolean;
  public referent_volunteer          :string;
  public referent_volunteer_entity   :string;

  public anonymization_token         :string;
  public anonymization_date          :Date;

  public ul_registration_token       :string;
  public queteur_registration_token  :string;
  public registration_approved       :boolean;
  public reject_reason               :string;
  public queteur_id                  :number;
  public registration_id             :number;

}
  