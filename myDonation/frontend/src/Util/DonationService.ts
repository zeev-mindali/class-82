import axios from "axios";
import DonationModel from "../model/DonationModel";
import { DonationTypeModel } from "../model/DonationTypeModel";
import appUrl from "./Config";

class DonationService{
    public async getAllPayments():Promise<DonationTypeModel[]>{
        const response = await axios.get<DonationTypeModel[]>(appUrl.paymentList);
        return response.data;
       
    }

    public async getAllDonations():Promise<DonationModel[]>{
        const response = await axios.get<DonationModel[]>(appUrl.donationList);
        return response.data;
    }

    public async deleteDonation(id:number):Promise<void>{
        //check modal in material ui (MUI)
        const response = await axios.delete<DonationModel>(appUrl.deleteDonation+id);
        console.log("item was deleted");
    }

    public async addDonation(donation:DonationModel):Promise<void>{
        const response = await axios.post<DonationModel>(appUrl.newDonation,donation);
    }
}

const donationService = new DonationService();
export default donationService;