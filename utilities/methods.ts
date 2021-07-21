 
 
 class utility {
     
 
    CliBtn(element:any) {
        element.click();
    }
    toDragAndDrop(element:any, element1:any) {
        return element.dragAndDrop(element1);
    }
       addValue(element, text) {
        return element.addValue(text);
    }
}
export default new utility(); 