/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    head: {
        link: [
            {
                rel: 'icon',
                href: '/umLogo.png', // 사용할 아이콘 이미지 파일 경로
                type: 'image/png', // 아이콘 이미지 파일 형식
            },
        ],
    },
    images: {
        domains: ['fastly.picsum.photos', 'picsum.photos'],
    },
};

module.exports = nextConfig;
