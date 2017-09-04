

class LogSender {

    send(message: any) {
        console.info(message);
        this.buildRequest(message);
    }
    private buildRequest(message: any): void {
        fetch("http://localhost:3001/logwriter", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            //make sure to serialize your JSON body
            body: JSON.stringify(message)
        }).then((response) => {
                console.info(response);
            });

    }
}

export const JLogSender = new LogSender();