/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
};

const repoName = 'shadcn'; // 본인 레포지토리명으로 변경
module.exports = {
  output: 'export',
  basePath: '/' + repoName,
  assetPrefix: 'https://kwak-jihyun.github.io/' + repoName,
};

export default nextConfig;
