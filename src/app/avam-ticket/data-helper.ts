
export class DataHelper {
    static getParentData() : any {
        return {
            orderId : 'O34598-F7673-C98989',
            price : 101.23,
            qtyTotal : 90,
            tradedPercentage : 0.45623432,
            children : {
                '2_YEAR' : {
                    symbol : '2_YEAR',
                    side : 'SELL'
                },
                '3_YEAR' : {
                    symbol : '3_YEAR',
                    side : 'BUY'
                }
            }
        };
    }

}