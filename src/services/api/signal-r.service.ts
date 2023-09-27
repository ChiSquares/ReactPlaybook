import * as signalR from "@microsoft/signalr";
import { SIGNALR_SERVICE } from "../api-url";
import { getDeviceId } from "./device-helper-service";

export class SignalRService {
  private hubConnection: signalR.HubConnection | undefined;
  private deviceId: string | undefined;

  constructor() {
    if (!this.deviceId) {
      getDeviceId().then((deviceId) => {
        this.deviceId = deviceId;
      });
    }
  }

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder().withUrl(SIGNALR_SERVICE, {
      skipNegotiation: true,
      transport: signalR.HttpTransportType.WebSockets,
    })
      .withAutomaticReconnect()
      .configureLogging(signalR.LogLevel.Information)
      .build();

    this.hubConnection.serverTimeoutInMilliseconds = 240000;

    this.hubConnection.start()
      .then(() => console.log('Connection started'))
      .catch((err: any) => console.log('Error while starting connection: ' + err));
  }

  public forbidden = () => {
    if (this.hubConnection) {
      this.hubConnection.on('forbidden', (data: any) => {
        if (data) {
          var user: any = {}; // AuthData.getUserData();
          if (user && user.userData) {
            // AuthService.getDeviceId().then((deviceId) => {
            //   if (user.userData.userId == data.userId && deviceId != data.device) {
            //     if (AuthData.isAuthenticated()) {
            //       AuthData.completeLogout();
            //       alert('A login attempt was detected from another browser.');
            //     } else {
            //     }
            //   }
            // })
          }
        }
      });
    }
  }


  public testHub = () => {
    if (this.hubConnection) {
      this.hubConnection.on('testhub', (data: any) => {
        if (data) {
          alert(data.message);
        }
      });
    }
  }

  // public sendMessage = (mesage: string, data?: any) => {
  //   this.hubConnection ..on('testhub', (data) => {
  //     if (data) {
  //       alert(data.message);
  //     }
  //   });
  // }

  public receiveMessage = () => {
    if (this.hubConnection) {
      this.hubConnection.on('forbidden', (data: any) => {
        if (data) {
          // var user = AuthData.getUserData();
          // if (user?.userData?.userId == data.userId ) {
          //   if (data.deviceId) {
          //     // if (this.deviceId != data.deviceId) {
          //     //   alert(data?.message);
          //     // }
          //   } else {
          //     alert(data?.message);
          //   }
          // }
        }
      });
    }
  }
}

export class SignarHttpClient extends signalR.DefaultHttpClient {
  // private authKey: string = '';

  // publicructor(public injector: Injector) {
  //   public config = injector.get(AppConfigService);
  //   authKey = config.appConfig?.authKey;
  // }

  public send(request: signalR.HttpRequest): Promise<signalR.HttpResponse> {
    // request.headers = { ...request.headers, 'X-Auth-Key': `${authKey}` };
    return super.send(request);
  }

  // usage
  // let this.hubConnection  = new HubConnectionBuilder()
  //   .withUrl(url, { httpClient: new SignarHttpClient() })
  //   .build();
}
