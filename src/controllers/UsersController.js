create (req,res){
    res.send('สร้างผู้ใช้' + JSON.stringify(req.body))
},

Read (req,res){
    res.send('อ่านข้อมูลผู้ใช้ '+JSON.stringify(req.body))
},

Update (req,res){
    res.send('อัปเดทข้อมูลผู้ใช้ Id '+ JSON.stringify(req.body))
},

Delete (req,res){
    res.send('ลบข้อมูลผู้ใช้ Id '+ JSON.stringify(req.body))
},
