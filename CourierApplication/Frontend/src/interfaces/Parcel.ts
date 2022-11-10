export interface Parcel{

    id:number,
    senderEmail:string,
    receiverEmail:string,
    trackId:string,
    location:string,
    destination:string,
    dispatchedDate:string,
    weight:number,
    price:number,
    markers:string,
    status:number,
    deleted:number
}