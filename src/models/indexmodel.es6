import rpA from 'request-promise';
class indexmodel {
    constructor(ctx) {
        this.ctx = ctx;
    }
    updateNum() {
        const options = {
            uri: "http://localhost:8888/koa2/PRAISETHUMB/index.php",
            methods: "GET"
        }
        return new Promise((resolve, reject) => {
            rpA(options).then((result) => {
                const info = JSON.parse(result);
                if (info) {
                    resolve({ data: info.result })
                } else {
                    reject({});
                }
                console.log(info);
            })
        })
    }
}

export default indexmodel;