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

    // return entries.map((fileName) => {
    //     return path.parse(fileName)
    // })
}

function getMdxFiles() {
    const allFiles = getAllFilesInDirectory(postsDirectory);

    const mdxFiles = [];
    for(let i = 0; i < allFiles.length; i++) {
        if(allFiles[i].endsWith(mdx_file_extension)) {
            mdxFiles.push(allFiles[i]);
        }
    }

    return mdxFiles;
}

export function getAllPostsPath() {
    let allMdxFiles = getMdxFiles();

    // allMdxFiles = allMdxFiles.map((filePath) => {
    //     return filePath.replace(postsDirectory, '').replace(mdx_file_extension, '').replace(/\\/g, '');
    // });

    return allMdxFiles.map((parsedFile) => {
        return {
            params: {
                id: path.parse(parsedFile).name,
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

export function getPostMetadata(id) {
    const postMetadata = metadata.filter((metadata, index) => {
        let path = postPaths[index]?.importedPath;
        let path_list = path.split('/');
        path = path_list[path_list.length - 1].replace(/\.mdx$/, '');
        //console.log(path, id);
        if (path == id)
            return {metadata}
    })
    return postMetadata;
}

export function getPostData(category, id) {
    // const fullPath = path.join(postsDirectory, id + mdx_file_extension);

    // get MDX metadata and content
    const fileContents = fs.readFileSync(path.join(postsDirectory, category, id + mdx_file_extension), 'utf8');
    // get metadata, content
    const {data, content} = matter(fileContents);

    let metadata = data;
    metadata['id'] = id;

    return {'metadata': metadata, 'content': content};

    /*
        const full_path = path.join(postsDirectory, `${id}.mdx`);
        const MDXContent = dynamic(() => import(full_path));
        const mdx = <MDXContent />
        return {
            id,
            mdx,
        }
    */
}