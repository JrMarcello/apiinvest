// Models
const { Builder } = require('../../database/models');

/**
 * @api {get} /ping Ping 
 * @apiName Ping
 * @apiGroup Boot
 * @apiVersion 1.0.0
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *      "message": "Pong"
 *   }
 *
 * @apiErrorExample Error-Response:
 *   HTTP/1.1 500 Internal Server Error
 *   {
 *      "message": "Ping"
 *   }
 */
export const ping = async (request, response) => {

    try {

        const body = {
            message: "Pong"
        };

        const result = await Builder
            .findAll();

        return response
            .status(200)
            .json(body);
        
    } catch (error) {

        console.log(error.message);

        return response
            .status(500)
            .json({
                message: "Ping"
            });
    }
}