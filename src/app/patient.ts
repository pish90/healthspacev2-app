export class Patient {
    id?: number;
    firstName?: string;
    lastName?: string;
    gender?: string;
    isCitizen?: string;
    idNumber?: string;
    dateOfBirth?: Date;
    employer?: string;
    occupation?: string;
    telephoneNumber?: string;
    faxNumber?: string;
    physicalAddress?: string;
    postalAddress?: string;
    nextOfKinFirstName?: string;
    nextOfKinLastName?: string;
    nextOfKinPhoneNumber?: string;
    medicalAidNumber?: string;
    medicalScheme?: string;
    medicalAidPlan?: string;
    dependentCode?: number;
    mainMemberName?: string;
    mainMemberIdNumber?: string;
    mainMemberPhysicalAddress?: string;
    listOfAppointments = [];
}