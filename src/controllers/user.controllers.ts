import { Request, Response } from "express";
const getHomepage = (req: Request, res: Response) => {
    return res.render("homes");
}

const getCreateUserPage = (req: Request, res: Response) => {
    return res.render("create-user.ejs");
}

const postCreateUser = (req: Request, res: Response) => {
    return res.render("homes");
}

export { getHomepage, getCreateUserPage, postCreateUser };