module.exports = {
  signupRequest: {
    username: { type: 'string', required: true, example: 'cuicuicui' },
    password: { type: 'string', required: true, example: 'ceshiceshi1' },
    confirmPassword: { type: 'string', required: true }
  },
  signinRequest: {
    username: { type: 'string', required: true, example: 'cuicuicui' },
    password: { type: 'string', required: true, example: 'ceshiceshi1' },
    longTimeSignin: { type: 'boolean', required: false, example: false }
  },
  uploadVideoRequest: {
    videoData: { type: 'files', required: true, example: '{}' },
    videoName: { type: 'string', required: true, example: 'videoName' },
    videoCover: { type: 'string', required: true, example: 'http://.....jpg' }
  },
  deleteVideoRequest: {
    paths: { type: 'object', required: true, example: '["http://...mp4", "http://...mp4"]' }
  },
  journalAddRequest: {
    id: { type: 'string', required: true, example: 'id' },
    userId: { type: 'string', required: true, example: 'yonghuid' },
    start: { type: 'int', required: false, example: 59875846285748 },
    stop: { type: 'int', required: false, example: 84923789673 }
  },
  journalGetByIdRequest: {
    id: { type: 'string', required: true, example: 'hcjhfxdfzxjkbid' },
    type: { type: 'int', required: true, example: 1 },
    limit: { type: 'int', required: false, example: 20 },
    offset: { type: 'int', required: false, example: 0 }
  },
  journalGetByUserRequest: {
    userId: { type: 'string', required: true, example: '用户id' },
    type: { type: 'int', required: true, example: 1 },
    limit: { type: 'int', required: false, example: 20 },
    offset: { type: 'int', required: false, example: 0 }
  },
  articleCreateRequest: {
    title: { type: 'string', required: true, example: '文章标题' },
    cover: { type: 'string', required: true, example: '文章封面' },
    describe: { type: 'string', required: true, example: '文章描述' },
    content: { type: 'string', required: true, example: '文章内容' },
    authorId: { type: 'string', required: true, example: '作者id' }
  },
  articleUpdateRequest: {
    id: { type: 'string', required: true, example: '文章id' },
    title: { type: 'string', required: true, example: '文章标题' },
    cover: { type: 'string', required: true, example: '文章封面' },
    describe: { type: 'string', required: true, example: '文章描述' },
    content: { type: 'string', required: true, example: '文章内容' },
    authorId: { type: 'string', required: true, example: '作者id' }
  },
  articleDeleteRequest: {
    id: { type: 'string', required: true, example: '文章id' }
  },
  articleGetRequest: {
    id: { type: 'string', required: true, example: '文章id' }
  },
  articleGetListRequest: {
    offset: { type: 'number', required: false, example: 0 },
    limit: { type: 'number', required: false, example: 10 },
    sort: { type: 'string', required: false, example: 'time || hot' }
  },
  replyPushRequest: {
    userId: { type: 'string', required: true, example: '用户id' },
    watchId: { type: 'string', required: true, example: '(视频 | 文章)id' },
    reply: { type: 'string', required: true, example: '评论内容' }
  },
  replyGetRequest: {
    id: { type: 'string', required: true, example: '评论id' }
  },
  replyGetListRequest: {
    id: { type: 'string', required: true, example: '评论的（文章|视频）id' },
    offset: { type: 'number', required: false, example: 0 },
    limit: { type: 'number', required: false, example: 10 }
  },
  teacherAddRequest: {
    name: { type: 'string', required: true, example: '姓名' },
    photo: { type: 'string', required: true, example: '照片' },
    describe: { type: 'string', required: true, example: '描述' },
    gender: { type: 'string', required: false, example: '性别' },
    age: { type: 'number', required: false, example: '18' }
  },
  teacherDeleteRequest: {
    id: { type: 'string', required: true, example: 'id' }
  },
  teacherUpdateRequest: {
    id: { type: 'string', required: true, example: 'id' },
    name: { type: 'string', required: true, example: '姓名' },
    photo: { type: 'string', required: true, example: '照片' },
    describe: { type: 'string', required: true, example: '描述' },
    gender: { type: 'string', required: false, example: '性别' },
    age: { type: 'number', required: false, example: '18' }
  },
  courseGetByIdRequest: {
    id: { type: 'string', required: true, example: '教程id' }
  },
  courseFindAllRequest: {
    sort: { type: 'string', required: false, example: '教程排序方式: sort | time' },
    limit: { type: 'string', required: false, example: '每页多少条: 20' },
    page: { type: 'string', required: false, example: '第几页: 1' },
    type: { type: 'string', required: false, example: '返回对应分类下教程: all' }
  },
  courseCreateRequest: {
    course: { type: 'string', required: true, example: '' },
    course_type_id: { type: 'string', required: true, example: '' },
    course_cover: { type: 'string', required: true, example: '' },
    course_describe: { type: 'string', required: true, example: '' },
    course_videos: {
      type: 'object',
      itemType: 'object',
      example: [
        {
          id: 'id',
          index: 'index'
        }
      ]
    }
  }
};
