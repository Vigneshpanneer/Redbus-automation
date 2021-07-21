import path from "../pageobjects/path"
import url from "../url";
import data from "../input_data/data";
import methods from "../utilities/methods";
  
  class Redlogin {
      
    get fromSearch() {
        return $(path.fromsearch);
    }
    get boarding() {
        return $(path.fromsearch);   
    }
    get toSearch() {
        return $(path.tosearch);
    }
    get Drop () {
        return $(path.tosearch);
    }
    get traveldate1 () {
        return $(path.datebtn1);
    }
    get traveldate2 () {
        return $(path.datebtn2);
    }

    get Searchbtn () {
        return $(path.buttonsearch);
    }


    get ViewSeats () {
        return $(path.viewseat);
    }
    get SeatSelect () {
        return $(path.selectseat);
    }
    get boardingpnt () {
        return $(path.bordingpnt);
    }
    get Dropingpnt () {
        return $(path.dropingpnt);
    }

    get bookBus () {
        return $(path.bookticket);
    }

    bookingstep(){
        browser.url(url.homeurl)
        methods.CliBtn(this.fromSearch);
        methods.addValue(this.boarding,data.fromdata);
        methods.CliBtn(this.toSearch);
        methods.CliBtn(this.traveldate1);
        methods.CliBtn(this.traveldate2);
        methods.CliBtn(this.Searchbtn);
         methods.CliBtn(this.ViewSeats);
         methods.CliBtn(this.SeatSelect);
         methods.CliBtn(this.boardingpnt);
         methods.CliBtn(this.Dropingpnt);
         methods.CliBtn(this.bookBus);

                        
    }
    
}
   
export default new Redlogin();