import { Component } from '@angular/core';
import { Logger, getLogger, BrowserConsoleAppender, PatternLayout, logLog, AjaxAppender, JsonLayout } from 'log4javascript';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private logger : Logger;
  title = 'app';
  meaning: number;

  constructor() {
    // try {
    this.setupLogger();
    
    // var arr = [1, 5, 6, 9, 10, 12, 14, 16, 20];
    // var ans = this.binarySearch(arr, 0, arr.length - 1, 10);
    // if (ans == -1) {
    //   this.logger.warn('Key not found');
    // }
    // else {
    //   this.logger.warn('Key found at position ',ans);
    // }
    
    // this.logger.info(`Hi There, I'm log4javascript logger`);
    // throw new Error('There is an exception situation');
    // } catch(err) {     
    //   this.logger.error('error occured',err);
    // }
  }

  binarySearch(array, left, right, key) {
    if (left > right) {
      return -1;
    }

    var mid = Math.floor((left + right) / 2);

    if (array[mid] == key) {
      return mid;
    }

    if (array[mid] > key) {
      return this.binarySearch(array, left, mid - 1, key);
    }

    return this.binarySearch(array, mid + 1, right, key);
  }
  private setupLogger() {
    this.logger = getLogger('AppComponent');
    const appender = new BrowserConsoleAppender();
    const layout = new PatternLayout("%d{yyyy-MM-dd HH:mm:ss.SSS} [%-5p] [%c] [%f{1}]- %m%n");
    layout.setCustomField('user', 'bkatoch');
    layout.setCustomField('mac', 'BDRWE0987');
    
    const ajaxAppender = new AjaxAppender('http://localhost:3000/log');
    // ajaxAppender.setBatchSize(3);
    ajaxAppender.setTimerInterval(10000);
    const aLayout = new JsonLayout(false,false);
    aLayout.setKeys('src','ts','lvl','msg','ex', 'url');
    aLayout.setCustomField('user', 'bkatoch');
    aLayout.setCustomField('app', 'MKTWATCH');
    // ajaxAppender.addHeader('Access-Control-Allow-Headers', 'Content-Type');
    // ajaxAppender.addHeader('Access-Control-Allow-Methods', 'GET, POST');
    // ajaxAppender.addHeader('Access-Control-Allow-Origin', '*');
    ajaxAppender.addHeader('content-type' , 'application/json');


    ajaxAppender.setLayout(aLayout);
    appender.setLayout(aLayout);
    this.logger.addAppender(appender);
    this.logger.addAppender(ajaxAppender);
    
  }


}
