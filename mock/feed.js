
  
  export default [
    // user login
    {
      url: '/getFeed',
      type: 'post',
      response: () => {
        return {
          code: 0,
          data: {
            "interact_conf":{
                "sticker_data":{
                    "time_lines":[
                        {
                            "start_time":2000,
                            "end_time":9153,
                            "layout":{
                                "config":{
                                    "id":"",
                                    "type":10,
                                    "mask":0
                                },
                                "frame":{
                                    "ref_width":0,
                                    "width":0,
                                    "height":0,
                                    "x":0,
                                    "y":0,
                                    "scale":0,
                                    "angle":0,
                                    "miniScale":0,
                                    "maxScale":0,
                                    "limitArea":{
                                        "tl_x":0,
                                        "tl_y":0,
                                        "width":0,
                                        "height":0
                                    },
                                    "size_type":0
                                },
                                "host_content":{
                                    "backgrounds":[

                                    ],
                                    "question":{
                                        "text":"",
                                        "text_color":"#fff",
                                        "text_color_selected":"",
                                        "font_size":32,
                                        "background":"",
                                        "background_selected":"",
                                        "trigger":{
                                            "type":0,
                                            "actions":[

                                            ],
                                            "start_time":19000,
                                            "end_time":20053
                                        },
                                        "background_h5":"",
                                        "resource":{
                                            "resource_url":{

                                            },
                                            "loop_mode":0
                                        },
                                        "frame":{
                                            "ref_width":750,
                                            "width":410,
                                            "height":90,
                                            "x":0.5,
                                            "y":0.25862068,
                                            "scale":1,
                                            "angle":0,
                                            "miniScale":0,
                                            "maxScale":1.82,
                                            "limitArea":{
                                                "tl_x":0,
                                                "tl_y":0,
                                                "width":0.84,
                                                "height":0.683
                                            },
                                            "size_type":0
                                        },
                                        "is_right_answer":false,
                                        "name":"问题",
                                        "id":"QuestionSticker0"
                                    },
                                    "ans_list":[
                                        {
                                            "text":"狐狸",
                                            "text_color":"#000",
                                            "text_color_selected":"",
                                            "font_size":32,
                                            "background":"https://weishicdn.gtimg.cn/material/T1a3dfa091557297938825.png",
                                            "background_selected":"https://weishicdn.gtimg.cn/material/T1a3dfa091557297938825.png",
                                            "trigger":{
                                                "type":0,
                                                "actions":[
                                                    {
                                                        "type":4,
                                                        "args":{
                                                            "seek":"11003"
                                                        }
                                                    },
                                                    {
                                                        "type":103,
                                                        "args":{
                                                            "showResultImmediately":"0"
                                                        }
                                                    }
                                                ],
                                                "start_time":19000,
                                                "end_time":20053
                                            },
                                            "background_h5":"https://weishicdn.gtimg.cn/material/T1a3dfa091557297938825.png",
                                            "resource":{
                                                "resource_url":{

                                                },
                                                "loop_mode":0
                                            },
                                            "frame":{
                                                "ref_width":750,
                                                "width":410,
                                                "height":90,
                                                "x":0.5,
                                                "y":0.5209895,
                                                "scale":1,
                                                "angle":0,
                                                "miniScale":0,
                                                "maxScale":1.82,
                                                "limitArea":{
                                                    "tl_x":0,
                                                    "tl_y":0,
                                                    "width":0.84,
                                                    "height":0.683
                                                },
                                                "size_type":0
                                            },
                                            "is_right_answer":false,
                                            "name":"答案",
                                            "id":"AnswerSticker01"
                                        },
                                        {
                                            "text":"老鼠",
                                            "text_color":"#000",
                                            "text_color_selected":"",
                                            "font_size":32,
                                            "background":"https://weishicdn.gtimg.cn/material/T1a3dfa091557297938825.png",
                                            "background_selected":"https://weishicdn.gtimg.cn/material/T1a3dfa091557297938825.png",
                                            "trigger":{
                                                "type":0,
                                                "actions":[
                                                    {
                                                        "type":4,
                                                        "args":{
                                                            "seek":"11003"
                                                        }
                                                    },
                                                    {
                                                        "type":103,
                                                        "args":{
                                                            "showResultImmediately":"0"
                                                        }
                                                    }
                                                ],
                                                "start_time":19000,
                                                "end_time":20053
                                            },
                                            "background_h5":"https://weishicdn.gtimg.cn/material/T1a3dfa091557297938825.png",
                                            "resource":{
                                                "resource_url":{

                                                },
                                                "loop_mode":0
                                            },
                                            "frame":{
                                                "ref_width":750,
                                                "width":410,
                                                "height":90,
                                                "x":0.5,
                                                "y":0.62593704,
                                                "scale":1,
                                                "angle":0,
                                                "miniScale":0,
                                                "maxScale":1.82,
                                                "limitArea":{
                                                    "tl_x":0,
                                                    "tl_y":0,
                                                    "width":0.84,
                                                    "height":0.683
                                                },
                                                "size_type":0
                                            },
                                            "is_right_answer":true,
                                            "name":"答案",
                                            "id":"AnswerSticker02"
                                        }
                                    ],
                                    "sequence_mode":0,
                                    "map_ext":{

                                    }
                                },
                                "guest_content":{
                                    "backgrounds":[

                                    ],
                                    "question":{
                                        "text":"",
                                        "text_color":"#fff",
                                        "text_color_selected":"",
                                        "font_size":32,
                                        "background":"",
                                        "background_selected":"",
                                        "trigger":{
                                            "type":0,
                                            "actions":[

                                            ],
                                            "start_time":19000,
                                            "end_time":20053
                                        },
                                        "background_h5":"",
                                        "resource":{
                                            "resource_url":{

                                            },
                                            "loop_mode":0
                                        },
                                        "frame":{
                                            "ref_width":750,
                                            "width":410,
                                            "height":90,
                                            "x":0.5,
                                            "y":0.25862068,
                                            "scale":1,
                                            "angle":0,
                                            "miniScale":0,
                                            "maxScale":1.82,
                                            "limitArea":{
                                                "tl_x":0,
                                                "tl_y":0,
                                                "width":0.84,
                                                "height":0.683
                                            },
                                            "size_type":0
                                        },
                                        "is_right_answer":false,
                                        "name":"问题",
                                        "id":"QuestionSticker0"
                                    },
                                    "ans_list":[
                                        {
                                            "text":"狐狸",
                                            "text_color":"#000",
                                            "text_color_selected":"",
                                            "font_size":32,
                                            "background":"https://weishicdn.gtimg.cn/material/T1a3dfa091557297938825.png",
                                            "background_selected":"https://weishicdn.gtimg.cn/material/T1a3dfa091557297938825.png",
                                            "trigger":{
                                                "type":0,
                                                "actions":[
                                                    {
                                                        "type":4,
                                                        "args":{
                                                            "seek":"20053"
                                                        }
                                                    },
                                                    {
                                                        "type":103,
                                                        "args":{
                                                            "showResultImmediately":"0"
                                                        }
                                                    }
                                                ],
                                                "start_time":19000,
                                                "end_time":20053
                                            },
                                            "background_h5":"https://weishicdn.gtimg.cn/material/T1a3dfa091557297938825.png",
                                            "resource":{
                                                "resource_url":{

                                                },
                                                "loop_mode":0
                                            },
                                            "frame":{
                                                "ref_width":750,
                                                "width":410,
                                                "height":90,
                                                "x":0.5,
                                                "y":0.5209895,
                                                "scale":1,
                                                "angle":0,
                                                "miniScale":0,
                                                "maxScale":1.82,
                                                "limitArea":{
                                                    "tl_x":0,
                                                    "tl_y":0,
                                                    "width":0.84,
                                                    "height":0.683
                                                },
                                                "size_type":0
                                            },
                                            "is_right_answer":false,
                                            "name":"答案",
                                            "id":"AnswerSticker01"
                                        },
                                        {
                                            "text":"老鼠",
                                            "text_color":"#000",
                                            "text_color_selected":"",
                                            "font_size":32,
                                            "background":"https://weishicdn.gtimg.cn/material/T1a3dfa091557297938825.png",
                                            "background_selected":"https://weishicdn.gtimg.cn/material/T1a3dfa091557297938825.png",
                                            "trigger":{
                                                "type":0,
                                                "actions":[
                                                    {
                                                        "type":4,
                                                        "args":{
                                                            "seek":"20053"
                                                        }
                                                    },
                                                    {
                                                        "type":103,
                                                        "args":{
                                                            "showResultImmediately":"0"
                                                        }
                                                    }
                                                ],
                                                "start_time":19000,
                                                "end_time":20053
                                            },
                                            "background_h5":"https://weishicdn.gtimg.cn/material/T1a3dfa091557297938825.png",
                                            "resource":{
                                                "resource_url":{

                                                },
                                                "loop_mode":0
                                            },
                                            "frame":{
                                                "ref_width":750,
                                                "width":410,
                                                "height":90,
                                                "x":0.5,
                                                "y":0.62593704,
                                                "scale":1,
                                                "angle":0,
                                                "miniScale":0,
                                                "maxScale":1.82,
                                                "limitArea":{
                                                    "tl_x":0,
                                                    "tl_y":0,
                                                    "width":0.84,
                                                    "height":0.683
                                                },
                                                "size_type":0
                                            },
                                            "is_right_answer":true,
                                            "name":"答案",
                                            "id":"AnswerSticker02"
                                        }
                                    ],
                                    "sequence_mode":0,
                                    "map_ext":{

                                    }
                                }
                            },
                            "ctrl":{
                                "type":2,
                                "actions":[
                                    {
                                        "type":1,
                                        "args":{

                                        }
                                    }
                                ],
                                "start_time":8000,
                                "end_time":9000
                            }
                        },
                        {
                            "start_time":11003,
                            "end_time":19000,
                            "layout":{
                                "config":{
                                    "id":"",
                                    "type":10,
                                    "mask":0
                                },
                                "frame":{
                                    "ref_width":0,
                                    "width":0,
                                    "height":0,
                                    "x":0,
                                    "y":0,
                                    "scale":0,
                                    "angle":0,
                                    "miniScale":0,
                                    "maxScale":0,
                                    "limitArea":{
                                        "tl_x":0,
                                        "tl_y":0,
                                        "width":0,
                                        "height":0
                                    },
                                    "size_type":0
                                },
                                "host_content":{
                                    "backgrounds":[

                                    ],
                                    "question":{
                                        "text":"",
                                        "text_color":"#FFFFFF",
                                        "text_color_selected":"",
                                        "font_size":32,
                                        "background":"",
                                        "background_selected":"",
                                        "trigger":{
                                            "type":0,
                                            "actions":[

                                            ],
                                            "start_time":32953,
                                            "end_time":33266
                                        },
                                        "background_h5":"",
                                        "resource":{
                                            "resource_url":{

                                            },
                                            "loop_mode":0
                                        },
                                        "frame":{
                                            "ref_width":750,
                                            "width":410,
                                            "height":90,
                                            "x":0.5,
                                            "y":0.25862068,
                                            "scale":1,
                                            "angle":0,
                                            "miniScale":0,
                                            "maxScale":1.82,
                                            "limitArea":{
                                                "tl_x":0,
                                                "tl_y":0,
                                                "width":0.84,
                                                "height":0.683
                                            },
                                            "size_type":0
                                        },
                                        "is_right_answer":false,
                                        "name":"问题",
                                        "id":"Entity:rO5KCQf-8"
                                    },
                                    "ans_list":[
                                        {
                                            "text":"情人节",
                                            "text_color":"#000",
                                            "text_color_selected":"",
                                            "font_size":32,
                                            "background":"https://weishicdn.gtimg.cn/material/T1a3dfa091557297938825.png",
                                            "background_selected":"https://weishicdn.gtimg.cn/material/T1a3dfa091557297938825.png",
                                            "trigger":{
                                                "type":0,
                                                "actions":[
                                                    {
                                                        "type":5,
                                                        "args":{
                                                            
                                                        }
                                                    },
                                                    {
                                                        "type":103,
                                                        "args":{
                                                            "showResultImmediately":"0"
                                                        }
                                                    }
                                                ],
                                                "start_time":32953,
                                                "end_time":33266
                                            },
                                            "background_h5":"https://weishicdn.gtimg.cn/material/T1a3dfa091557297938825.png",
                                            "resource":{
                                                "resource_url":{

                                                },
                                                "loop_mode":0
                                            },
                                            "frame":{
                                                "ref_width":750,
                                                "width":410,
                                                "height":90,
                                                "x":0.5,
                                                "y":0.5209895,
                                                "scale":1,
                                                "angle":0,
                                                "miniScale":0,
                                                "maxScale":1.82,
                                                "limitArea":{
                                                    "tl_x":0,
                                                    "tl_y":0,
                                                    "width":0.84,
                                                    "height":0.683
                                                },
                                                "size_type":0
                                            },
                                            "is_right_answer":false,
                                            "name":"新答案",
                                            "id":"Entity::f8k7qaK2"
                                        },
                                        {
                                            "text":"元宵",
                                            "text_color":"#000",
                                            "text_color_selected":"",
                                            "font_size":32,
                                            "background":"https://weishicdn.gtimg.cn/material/T1a3dfa091557297938825.png",
                                            "background_selected":"https://weishicdn.gtimg.cn/material/T1a3dfa091557297938825.png",
                                            "trigger":{
                                                "type":0,
                                                "actions":[
                                                    {
                                                        "type":5,
                                                        "args":{
                                                            "seek":"33266"
                                                        }
                                                    },
                                                    {
                                                        "type":103,
                                                        "args":{
                                                            "showResultImmediately":"0"
                                                        }
                                                    }
                                                ],
                                                "start_time":32953,
                                                "end_time":33266
                                            },
                                            "background_h5":"https://weishicdn.gtimg.cn/material/T1a3dfa091557297938825.png",
                                            "resource":{
                                                "resource_url":{

                                                },
                                                "loop_mode":0
                                            },
                                            "frame":{
                                                "ref_width":750,
                                                "width":410,
                                                "height":90,
                                                "x":0.5,
                                                "y":0.62593704,
                                                "scale":1,
                                                "angle":0,
                                                "miniScale":0,
                                                "maxScale":1.82,
                                                "limitArea":{
                                                    "tl_x":0,
                                                    "tl_y":0,
                                                    "width":0.84,
                                                    "height":0.683
                                                },
                                                "size_type":0
                                            },
                                            "is_right_answer":true,
                                            "name":"新答案",
                                            "id":"Entity:zASPUARq4M"
                                        }
                                    ],
                                    "sequence_mode":0,
                                    "map_ext":{

                                    }
                                },
                            },
                            "ctrl":{
                                "type":2,
                                "actions":[
                                    {
                                        "type":5,
                                        "args":{

                                        }
                                    }
                                ],
                                "start_time":32966,
                                "end_time":33266
                            }
                        }
                    ]
                },
          }
            }
        }
      }
    },
    
  ]
  