import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {serialize} from "next-mdx-remote/serialize";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
const codeTitle = require('remark-code-titles')

const postsDirectory = path.join(process.cwd(), 'posts');
const mdx_file_extension = '.mdx';

function getAllFilesInDirectory(filePath: string) {
    const entries = fs.readdirSync(filePath);

    const files = entries.filter((entry) => {
        return fs.statSync(path.join(filePath, entry)).isFile();
    }).map((entry) => {
        return path.join(filePath, entry);
    });

    const directories = entries.filter((entry) => {
        return fs.statSync(path.join(filePath, entry)).isDirectory();
    });

    directories.forEach((directory) => {
        files.push(...getAllFilesInDirectory(path.join(filePath, directory)));
    });

    return files;
}

function getMdxFiles() {
    const allFiles = getAllFilesInDirectory(postsDirectory);
    const mdxFiles = [];
    for (let i = 0; i < allFiles.length; i++) {
        if (allFiles[i].endsWith(mdx_file_extension)) {
            mdxFiles.push(allFiles[i]);
        }
    }
    return mdxFiles;
}

export function getAllPostsPath() {
    let allMdxFiles = getMdxFiles();

    return allMdxFiles.map((parsedFile) => {
        const middle = parsedFile.replace(postsDirectory, '').replace(mdx_file_extension, '');
        const id = path.parse(middle).name;
        const category = middle.replace(id, '').split('\\')[1];
        return {
            params: {
                id
            }
        }
    })
}

export function getHomePostMetadata() {
    const files = getMdxFiles();
    const meta = files.map((parsedFile) => {
        const fileContents = fs.readFileSync(parsedFile, 'utf8');
        const {data} = matter(fileContents);
        let metadata = data;
        metadata['id'] = path.parse(parsedFile).name;
        return metadata;
    }).filter((metadata) => metadata.category !== 'til' && metadata.type != 'archive');

    return meta.sort((a, b) => {
        if (new Date(a.date) < new Date(b.date)) {
            return 1;
        } else {
            return -1;
        }
    })
}

export async function getPostData(id: string) {
    const files = getAllFilesInDirectory(postsDirectory);
    const file = files.find((file) => {
        return file.endsWith(id + mdx_file_extension);
    });

    const fileContents = fs.readFileSync(file!!, 'utf8');
    const {data, content} = matter(fileContents);

    let metadata = data;
    metadata['id'] = id;

    const mdxSource = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [
                remarkMath,
                codeTitle
            ],
            rehypePlugins: [
                rehypeKatex,
                rehypeHighlight
            ]
        }
    });

    return {metadata, mdxSource};
}