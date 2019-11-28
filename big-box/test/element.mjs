import bb from '..'
import jest from '../../test'

export default jest.suite(function () {
    let A, B, C, D, E

    console.log('\n\n-------- Elementwise Suite --------\n\n')

    A = bb.tensor({

        data:
            [
                [
                    [
                        [17, 36],
                        [29, 36],
                        [-12, 21]
                    ],

                    [
                        [1, 21],
                        [21, 24],
                        [-5, 1]
                    ]
                ],


                [
                    [
                        [35, 44],
                        [21, 26],
                        [-8, -15]
                    ],

                    [
                        [-2, 16],
                        [-13, 24],
                        [7, 11]
                    ]
                ]
            ]
    })

    B = bb.tensor({

        data: [
            [-46, 19],
            [-38, 9],
            [9, -15],
            [-25, -33]
        ]
    })

    C = bb.tensor({

        data: [[[10, 5, 2],
        [72, 6, 3],
        [91, 6, 1],
        [13, 4, 12]],

        [[57, 7, 1],
        [44, 2, 2],
        [49, 8, 4],
        [-33, 8, 5]],

        [[90, 2, 5],
        [66, 4, 3],
        [23, 1, 2],
        [21, 2, 2]]]
    })

    E = bb.tensor({

        data: [
            ['1 + 1i', '10 + 10i', '100 + 100i'],
            ['1 + 1i', '10 + 10i', '100 + 100i'],
            ['1 + 1i', '10 + 10i', '100 + 100i'],
            ['1 + 1i', '10 + 10i', '100 + 100i'],
        ]
    })

    const F = bb.tensor({

        data: [[[[0],
        [0],
        [0]]],


        [[[2],
        [2],
        [1]]],


        [[[4],
        [4],
        [2]]],


        [[[2],
        [2],
        [2]]],


        [[[3],
        [4],
        [3]]]]
    })

    const G = bb.tensor({

        data: [[[[3, 2],
        [3, 3],
        [4, 2]],

        [[4, 4],
        [1, 2],
        [0, 3]],

        [[4, 1],
        [1, 1],
        [4, 1]],

        [[3, 3],
        [0, 3],
        [4, 3]]]]
    })

    const H = bb.tensor({

        data: [[[[3, 2],
        [3, 3],
        [4, 2]],

        [[4, 4],
        [1, 2],
        [0, 3]],

        [[4, 1],
        [1, 1],
        [4, 1]],

        [[3, 3],
        [0, 3],
        [4, 3]]],


        [[[5, 4],
        [5, 5],
        [5, 3]],

        [[6, 6],
        [3, 4],
        [1, 4]],

        [[6, 3],
        [3, 3],
        [5, 2]],

        [[5, 5],
        [2, 5],
        [5, 4]]],


        [[[7, 6],
        [7, 7],
        [6, 4]],

        [[8, 8],
        [5, 6],
        [2, 5]],

        [[8, 5],
        [5, 5],
        [6, 3]],

        [[7, 7],
        [4, 7],
        [6, 5]]],


        [[[5, 4],
        [5, 5],
        [6, 4]],

        [[6, 6],
        [3, 4],
        [2, 5]],

        [[6, 3],
        [3, 3],
        [6, 3]],

        [[5, 5],
        [2, 5],
        [6, 5]]],


        [[[6, 5],
        [7, 7],
        [7, 5]],

        [[7, 7],
        [5, 6],
        [3, 6]],

        [[7, 4],
        [5, 5],
        [7, 4]],

        [[6, 6],
        [4, 7],
        [7, 6]]]]
    })
    const I = bb.tensor({

        data: [[[[[2, 1]],
        [[1, 3]]]],
        [[[[2, 2]],
        [[3, 1]]]]]
    })
    const J = bb.tensor({

        data: [[[[[2],
        [0]]],


        [[[0],
        [4]]]]]
    })
    const K = bb.tensor({

        data: [[[[3, 2],
        [3, 3],
        [4, 2]],

        [[4, 4],
        [1, 2],
        [0, 3]],

        [[4, 1],
        [1, 1],
        [4, 1]],

        [[3, 3],
        [0, 3],
        [4, 3]]],


        [[[5, 4],
        [5, 5],
        [5, 3]],

        [[6, 6],
        [3, 4],
        [1, 4]],

        [[6, 3],
        [3, 3],
        [5, 2]],

        [[5, 5],
        [2, 5],
        [5, 4]]],


        [[[7, 6],
        [7, 7],
        [6, 4]],

        [[8, 8],
        [5, 6],
        [2, 5]],

        [[8, 5],
        [5, 5],
        [6, 3]],

        [[7, 7],
        [4, 7],
        [6, 5]]],


        [[[5, 4],
        [5, 5],
        [6, 4]],

        [[6, 6],
        [3, 4],
        [2, 5]],

        [[6, 3],
        [3, 3],
        [6, 3]],

        [[5, 5],
        [2, 5],
        [6, 5]]],


        [[[6, 5],
        [7, 7],
        [7, 5]],

        [[7, 7],
        [5, 6],
        [3, 6]],

        [[7, 4],
        [5, 5],
        [7, 4]],

        [[6, 6],
        [4, 7],
        [7, 6]]]]
    })

    const L = bb.arange({ stop: 100 })
    const X = bb.ones({ shape: [4, 3, 2] })
    const Y = bb.ones({ shape: [3, 1] })

    this.expect(bb.add({ of: X, with: Y })).toEqual([[["2", "2"], ["2", "2"], ["2", "2"]], [["2", "2"], ["2", "2"], ["2", "2"]], [["2", "2"], ["2", "2"], ["2", "2"]], [["2", "2"], ["2", "2"], ["2", "2"]]])
    this.expect(new bb.cached.mean({ of: B }).invoke()).toEqual("-15")
    this.expect(new bb.cached.mean({ of: C }).invoke()).toEqual("16.66666603088379")
    this.expect(new bb.cached.mean({ of: K }).invoke()).toEqual("4.525000095367432")
    this.expect(new bb.cached.multiply({ of: B, with: 6 }).invoke()).toEqual([["-276", "114"], ["-228", "54"], ["54", "-90"], ["-150", "-198"]])
    this.expect(new bb.cached.min({ of: A }).invoke()).toEqual("-15")
    this.expect(new bb.cached.min({ of: A, axes: [0, 3] }).invoke()).toEqual([["17", "21", "-15"], ["-2", "-13", "-5"]])
    this.expect(new bb.cached.max({ of: A }).invoke()).toEqual("44")
    this.expect(new bb.cached.max({ of: A, axes: [0, 3] }).invoke()).toEqual([["44", "36", "21"], ["21", "24", "11"]])
    this.expect(new bb.cached.add({ of: B, with: B }).invoke()).toEqual([[`${-46 * 2}`, `${19 * 2}`], [`${-38 * 2}`, `${9 * 2}`], [`${9 * 2}`, `${-15 * 2}`], [`${-25 * 2}`, `${-33 * 2}`]])
    this.expect(new bb.cached.multiply({ of: B, with: B }).invoke()).toEqual([[`${-46 * -46}`, `${-19 * -19}`], [`${-38 * -38}`, `${9 * 9}`], [`${9 * 9}`, `${-15 * -15}`], [`${-25 * -25}`, `${-33 * -33}`]])
    this.expect(new bb.cached.subtract({ of: B, with: B }).invoke()).toEqual(bb.zerosLike({ tensor: B }))
    this.expect(new bb.cached.min({ of: C.slice({ region: [':', 0, ':'] }) }).invoke()).toEqual(1)
    this.expect(new bb.cached.divide({ of: C.slice({ region: [':', 0, ':'] }), with: C.slice({ region: [':', 0, ':'] }) }).invoke()).toEqual([["1", "1", "1"], ["1", "1", "1"], ["1", "1", "1"]])
    this.expect(new bb.cached.mean({ of: B, axes: [1] }).invoke()).toEqual(["-13.5", "-14.5", "-3", "-29"])
    this.expect(new bb.cached.mean({ of: B, axes: [0] }).invoke()).toEqual(["-25", "-5"])
    this.expect(B.ravel()).toEqual(["-46", "19", "-38", "9", "9", "-15", "-25", "-33"])
    this.expect(B.T().ravel()).toEqual(["-46", "-38", "9", "-25", "19", "9", "-15", "-33"])
    this.expect(E.ravel()).toEqual(["1+1i", "10+10i", "100+100i", "1+1i", "10+10i", "100+100i", "1+1i", "10+10i", "100+100i", "1+1i", "10+10i", "100+100i"])
    this.expect(new bb.cached.add({ of: F, with: G }).invoke()).toEqual(H)
    this.expect(new bb.cached.add({ of: I, with: J }).invoke()).toEqual([[[[["4", "3"], ["2", "1"]], [["3", "5"], ["1", "3"]]], [[["2", "1"], ["6", "5"]], [["1", "3"], ["5", "7"]]]], [[[["4", "4"], ["2", "2"]], [["5", "3"], ["3", "1"]]], [[["2", "2"], ["6", "6"]], [["3", "1"], ["7", "5"]]]]])
    this.expect(new bb.cached.sin({ of: L }).invoke()).toEqual(["0", "0.8414709568023682", "0.9092974066734314", "0.14112000167369843", "-0.756802499294281", "-0.9589242935180664", "-0.279415488243103", "0.6569865942001343", "0.9893582463264465", "0.41211849451065063", "-0.5440211296081543", "-0.9999902248382568", "-0.5365729331970215", "0.4201670289039612", "0.9906073808670044", "0.6502878665924072", "-0.2879033088684082", "-0.9613974690437317", "-0.7509872317314148", "0.14987720549106598", "0.9129452705383301", "0.8366556167602539", "-0.008851309306919575", "-0.8462204337120056", "-0.9055783748626709", "-0.13235175609588623", "0.7625584602355957", "0.9563759565353394", "0.2709057927131653", "-0.6636338829994202", "-0.9880316257476807", "-0.4040376543998718", "0.5514267086982727", "0.9999118447303772", "0.529082715511322", "-0.4281826615333557", "-0.9917788505554199", "-0.6435381174087524", "0.2963685691356659", "0.9637953639030457", "0.7451131343841553", "-0.15862266719341278", "-0.9165215492248535", "-0.8317747712135315", "0.017701925709843636", "0.8509035110473633", "0.9017883539199829", "0.12357312440872192", "-0.7682546377182007", "-0.9537526369094849", "-0.2623748481273651", "0.6702291965484619", "0.9866275787353516", "0.3959251642227173", "-0.558789074420929", "-0.9997551441192627", "-0.5215510129928589", "0.4361647665500641", "0.9928726553916931", "0.6367380023002625", "-0.30481061339378357", "-0.966117799282074", "-0.7391806840896606", "0.1673557013273239", "0.9200260639190674", "0.82682865858078", "-0.026551153510808945", "-0.8555199503898621", "-0.8979277014732361", "-0.11478481441736221", "0.7738906741142273", "0.9510546326637268", "0.2538233697414398", "-0.6767719388008118", "-0.9851462841033936", "-0.38778164982795715", "0.5661076307296753", "0.9995201826095581", "0.5139784812927246", "-0.4441126585006714", "-0.9938886761665344", "-0.6298879981040955", "0.3132287859916687", "0.9683644771575928", "0.7331902980804443", "-0.17607562243938446", "-0.923458456993103", "-0.8218178153038025", "0.03539830446243286", "0.8600693941116333", "0.8939966559410095", "0.10598751157522202", "-0.7794660925865173", "-0.9482821226119995", "-0.24525198340415955", "0.6832616925239563", "0.9835877418518066", "0.3796077370643616", "-0.5733819007873535", "-0.9992068409919739"])

    console.log('\n\n-------- End Elementwise Suite --------\n\n')
})
