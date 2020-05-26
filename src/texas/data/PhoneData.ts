module kelvin.texas {
    export class PhoneData {

        public static get phoneNumber(): any {
            return CacheData.getRAMData("PhoneData_phoneNumber");
        }

        public static set phoneNumber(data: any) {
            CacheData.saveRAMData("PhoneData_phoneNumber", data);
        }

        

    }
}