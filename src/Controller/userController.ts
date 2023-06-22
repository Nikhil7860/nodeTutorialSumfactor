import { executeQuery } from '../Database/ConnectDatabase'


export const userRegistration = async (req: any, res: any) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(req.body, "in body")
            // let { f_name, l_name, email, password, token } = req.body

            // const sqlQuery = `insert into user_table (f_name,l_name,email,password,token)values('Nikhil','arora','nikhil.sumfactor@gmail.com','Nikhil3432','63548237')`

            // const sqlQuery = `select * from user_table`

            // const sqlQuery = `update  user_table set f_name='NikhilArora' where token='63548237'`

            // const sqlQuery = `delete  from user_table  where token='63548237'`

            // const sqlQuery = `SELECT * FROM user_table as a join user_bankdetail as b  on a.email= b.email;`

            // let response = await executeQuery(sqlQuery)

            // console.log("🚀 ~ file: userController.ts:13 ~ returnnewPromise ~ response:", response)

            // return resolve(response)

        } catch (error) {
            console.log("🚀 ~ file: userController.ts:19 ~ returnnewPromise ~ error:", error)
            return reject(error)
        }
    })
}