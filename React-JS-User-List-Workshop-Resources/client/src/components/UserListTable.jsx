import UserListItem from "./UserListItem.jsx"
import * as userService from "../services/userService.js"
import { useEffect, useState } from "react"
import CreateUserModal from "./CreateUserModal.jsx"
import UserInfoModal from "./UserInfoModal.jsx"
import UserDeleteModal from "./UserdeleteModal.jsx"
import Spiner from "./LoadingSpiner.jsx"
const UserListTable = () => {
    const [users, setUsers] = useState([]);
    const [showCreate, setShowCreate] = useState(false)
    const [showInfo, setShowInfo] = useState(false)
    const [showDelete, setshowDelete] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null)
    const [isLoading, setisLoading] = useState(false)

    useEffect(() => {
        setisLoading(true)
        let a = userService.getAll()
            .then(result => setUsers(result))
            .catch(err => { console.log(err) })
            .finally(() => setisLoading(false))
    }, [])

    const createUserClickHandler = () => {
        setShowCreate(true)
    }
    const hideCreateUserModal = () => {
        setShowCreate(false)

    }
    const onUserCreateHandler = async (event) => {
        event.preventDefault()
        setShowCreate(false);
        const data = Object.fromEntries(new FormData(event.currentTarget))
        const newUsers = await userService.create(data)
        setUsers(state => [...state, newUsers])
    }
    const onUserInfoClick = async (userId) => {
        setSelectedUser(userId)
        setShowInfo(true)
    }
    const deleteUserhandler = async () => {
        const result = userService.remove(selectedUser)
        setUsers(state => state.filter(user => user._id !== selectedUser))
        setshowDelete(false)
    }
    const deleteUserClickhandler = async (userId) => {
        setSelectedUser(userId)
        setshowDelete(true)
    }

    return (
        <div className="table-wrapper">
            {showCreate && (
                <CreateUserModal
                    hideCreateUserModal={hideCreateUserModal}
                    onUserCreateHandler={onUserCreateHandler}
                />)}

            {showInfo && (
                <UserInfoModal
                    hideCreateUserModal={() => { setShowInfo(false) }}
                    userId={selectedUser} />)}

            {isLoading && <Spiner />}

            {showDelete && (
                <UserDeleteModal
                    hideCreateUserModal={() => { setshowDelete(false) }}
                    onDelete={deleteUserhandler}
                />)}

            <table className="table">
                <thead>
                    <tr>
                        <th>
                            Image
                        </th>
                        <th>
                            First name<svg aria-hidden="true" focusable="false" data-prefix="fas"
                                data-icon="arrow-down" className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Last name<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Email<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Phone<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Created
                            <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                data-icon="arrow-down" className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user) => (
                        <UserListItem
                            key={user._id}
                            userId={user._id}
                            firstName={user.firstName}
                            lastName={user.lastName}
                            email={user.email}
                            phoneNumber={user.phoneNumber}
                            createdAt={user.createdAt}
                            imageUrl={user.imageUrl}
                            onUserInfoClick={onUserInfoClick}
                            deleteUserClickhandler={deleteUserClickhandler}
                        />
                    ))}
                </tbody>
            </table>

            <button className="btn-add btn" onClick={createUserClickHandler}>Add new user</button>

        </div>
    )
}
export default UserListTable