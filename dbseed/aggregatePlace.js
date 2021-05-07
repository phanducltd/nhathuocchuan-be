const { MongoClient } = require('mongodb')
const fetch = require('node-fetch')

let MONGO_URL = 'mongodb://localhost'
const client = new MongoClient(MONGO_URL)
async function updateDistrict() {
    try {
        console.log('🚀  Server ready')
        await client.connect()
        const db = client.db('test14359')
        let DISTRICTS = await db.collection('places').find({ type: "DISTRICT" }).toArray()
        let PROVINCES = await db.collection('places').find({ type: "PROVINCE" }).toArray()
        let WARDS = await db.collection('places').find({ type: "WARD" }).toArray()
        console.log(DISTRICTS.length)
        const patt = new RegExp(/Quận(\d|\s)+/);
        const patt2 = new RegExp(/Phường(\d|\s)+/);
        let resultDis = DISTRICTS.map(dis => ({
            value: dis.code,
            label: patt.test(dis.name) ?dis.name: dis.name.replace(/^(Huyện|Thành phố|Thị xã|Quận )/, ''),
            codeParent: dis.codeParent,
            children: WARDS.filter(war => war.codeParent === dis.code)
                .map(h => ({
                    value: h.code,
                    label: patt2.test(h.name)?h.name: h.name.replace(/^(Thị trấn |Xã |Phường)/, '')
                }))
        }))

        PROVINCES.map(province => {
            db.collection('aggregateplaces').findOneAndUpdate(
                { value: province.code },
                {
                    $set: {
                        value: province.code,
                        label: province.name.replace(/^(Tỉnh|Thành phố)/, ''),
                        children: resultDis.filter(f => f.codeParent === province.code)
                    }
                },
                { upsert: true }
            )
        })
        client.close()
        console.log('object')
    } catch (err) {
        console.log('❌  Server error', err.stack)
    }
}
updateDistrict()