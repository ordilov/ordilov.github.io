import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// current 'posts' directory
const postsDirectory = path.join(process.cwd(), 'posts');
const mdx_file_extension = '.mdx';

function getAllFilesInDirectory(filePath) {
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
                id,
                category
            }
        }
    })

    /*
        return metadata.map((post_metadata, index) => {
            let path = postPaths[index]?.importedPath;
            let path_list = path.split('/');
            path = path_list[path_list.length - 1].replace(/\.mdx$/, '');
            return {
                params: {
                    id: path,
                }
            }
        })
    */
}

export function getAllPostsMetadata() {
    const allMdxFiles = getMdxFiles();

    const allPostsData = allMdxFiles.map((parsedFile) => {
        // const fullPath = path.join(postsDirectory, parsedFile.base);

        // get MDX metadata and content
        const fileContents = fs.readFileSync(parsedFile, 'utf8');

        // get metadata, content
        const {data, content} = matter(fileContents);
        let metadata = data;
        metadata['id'] = path.parse(parsedFile).name;
        return {metadata, content}
    });

    return allPostsData.sort((a, b) => {
        if (new Date(a.metadata.date) < new Date(b.metadata.date)) {
            return 1;
        } else {
            return -1;
        }
    })

    /*
        const postsMetadata = metadata.map((metadata, index) => {
            let path = postPaths[index]?.importedPath;
            let path_list = path.split('/');
            path = path_list[path_list.length - 1].replace(/\.mdx$/, '');
            //console.log(path);
            metadata['id'] = path;
            return { metadata }
        });

        return postsMetadata.sort((a, b) => {
            if (new Date(a.metadata.date) < new Date(b.metadata.date)) {
                return 1;
            }
            else {
                return -1;
            }
        })
    */
}

export async function getPostData(id) {
    const files = getAllFilesInDirectory(postsDirectory);
    const file = files.find((file) => {
        return file.endsWith(id + mdx_file_extension);
    });

    // get MDX metadata and content
    const fileContents = fs.readFileSync(file, 'utf8');
    // get metadata, content
    const {data, content} = matter(fileContents);

    let metadata = data;
    metadata['id'] = id;

    return {'metadata': metadata, 'content': content};
}