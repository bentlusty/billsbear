import { ParseExcel } from '../../src/infra/parse-excel';

describe('ParseExcel', () => {
    it('should read file from path', async () => {
        const parseExcel = new ParseExcel();
        const excel = await parseExcel.getRows('tests/integration/sample-excel.xlsx');
        const expectedResult = '[{"cellCount":13,"cells":[null,"שם כרטיס","חיוב לתאריך","תאריך","שם בית עסק","סכום חיוב בש\'\'ח","סכום קנייה","אסמכתא","סכום הנחה על העסקה","אחוז הנחה על העסקה","תיאור אופן ההצמדה","מדד או שער בסיס","המדד או השער בו בוצע החיוב השוטף בעסקה","תאור סוג עסקת אשראי"]},{"cellCount":13,"cells":[null,1234,"2021-11-10T00:00:00.000Z","2021-10-06T00:00:00.000Z","A I G ביטוח חובה",1200.83,1200.83,123456,"","","ללא הצמדה","","","תשלומים"]},{"cellCount":13,"cells":[null,5678,"2021-11-10T00:00:00.000Z","2020-12-16T00:00:00.000Z","שטראוס מים בע\\"מ",100,1200,456789,"","","ללא הצמדה","","","תשלומים"]}]';
        expect(JSON.stringify(excel)).toMatch(
            expectedResult,
        );
    });
});
