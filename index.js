var faunadb = require('faunadb'),
    q = faunadb.query;


(async () => {
    var adminClient = new faunadb.Client({ secret: 'fnAD6USJAlACAZclbn1CG-tLg-lvV7mp_sCEwD9e' });

    try {
        const result = await adminClient.query(

            //  q.CreateDatabase({ name: 'child_db' })

            //   q.CreateKey({
            //     database: q.Database('child_db'),
            //     role: 'admin',
            //   })

            // q.CreateCollection({ name: 'messages' })

            //    q.CreateIndex({
            //     name: 'detail_by_title',
            //     source: q.Collection('messages'),
            //     terms: [{ field: ['data', 'detail'] }],
            //   })

            // q.Create(
            //     q.Collection('messages'),
            //     { data: { detail: 'ok whats going on ..' } },
            //   )



            // q.Map(
            //     [
            //       'this is message 1',
            //       'this is message 2',
            //       'this is message 3',
            //     ],
            //     q.Lambda(
            //       'detail',
            //       q.Create(
            //         q.Collection('messages'),
            //         { data: { title: q.Var('detail') } },
            //       )
            //     ),
            //     )



            // q.Get(q.Ref(q.Collection('messages'), '281835665097755141'))


            //    q.Get(
            //     q.Match(q.Index('detail_by_title'), 'i am fine ..')
            //   )


            // q.Update(
            //     q.Ref(q.Collection('messages'), '281834796044255749'),
            //     { data: { title: "i am sick" } },
            //   )

            // q.Replace(
            //     q.Ref(q.Collection('messages'), '281834796044255749'),
            //     { data: { title: 'i am good now' } },
            //   )

            q.Delete(
                q.Ref(q.Collection('messages'), '281835665097753093')
            )



        );
        
        console.log(result);

    } catch (error) {
        console.log(error);
    }


})(); 