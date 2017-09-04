import { Injectable } from '@angular/core';
import { 
  Logger, 
  Appender, 
  AjaxAppender, 
  JsonLayout, 
  BrowserConsoleAppender, 
  PatternLayout, 
  getLogger, 
  getRootLogger, 
  Level 
} from 'log4javascript';
import { Log4JsLoggerAdapter } from "./jett.logger.impl";
import { ApplicationLoggingService, ApplicationLogger, LogLevel } from "../logger-core/index";
import { WebWorkerAppender } from "./ww-appender";

@Injectable()
export class Log4JsLoggerService implements ApplicationLoggingService {
  private rootLogger : Logger;

  constructor() {
    this.setupLogger();
  }
  getLogger(name: string, level?: LogLevel) : ApplicationLogger {
    return new Log4JsLoggerAdapter(getLogger(name), level);
  }
  // getJettLogger(name: string, level?: Level) : ApplicationLogger {
  //   return new Log4JsLoggerAdapter(getLogger(name));
  // }

  private setupLogger() : void {
    this.rootLogger = getRootLogger();
    this.rootLogger.addAppender(this.createWebWorkerAppender());
  }
  private createBrowserConsoleAppender() : Appender {
    const browserConsoleAppender = new BrowserConsoleAppender();
    const layout = new PatternLayout("%d{yyyy-MM-dd HH:mm:ss.SSS} [%-5p] [%c] [%f{1}]- %m%n");
    layout.setKeys('src','ts','lvl','msg','ex', 'url');
    browserConsoleAppender.setLayout(layout);
    return browserConsoleAppender;
  }
  private createAjaxAppender(url: string) : Appender {
    const ajaxAppender = new AjaxAppender(url);
    const layout = new JsonLayout(false,true);
    layout.setKeys('src','ts','lvl','msg','ex', 'url');
    ajaxAppender.addHeader('content-type' , 'application/json');
    ajaxAppender.setLayout(layout);
    return ajaxAppender;
  }
  private createWebWorkerAppender() : Appender {
    const appender  = new WebWorkerAppender(false,"assets/workers/logger-worker.js","MarketWatch",50);

    const layout = appender.getLayout();
    layout.setKeys('src','ts','lvl','msg','ex', 'url');
    layout.setCustomField('user', 'bkatoch');
    appender.sessionId = 'MarketWatch';
    return appender;
  }
}
