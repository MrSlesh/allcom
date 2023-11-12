import { useState, FC } from 'react';
import { useTranslation } from 'react-i18next';

import EyeIcon from '../../../img/svg/eye.svg?react';
import EyeSlashIcon from '../../../img/svg/eye_slash.svg?react';

const ChangePassword: FC = (): JSX.Element => {
	const { t } = useTranslation('change_password');

	const [handlePassword, setHandlePassword] = useState<string>('');
	const [handleNewPassword, setHandleNewPassword] = useState<string>('');
	const [handleNewConfirmPassword, setHandleNewConfirmPassword] = useState<string>('');

	const [typeOldPassword, setTypeOldPassword] = useState<'text' | 'password'>('password');
	const [typeNewPassword, setTypeNewPassword] = useState<'text' | 'password'>('password');
	const [typeConfirmPassword, setTypeConfirmPassword] = useState<'text' | 'password'>('password');

	const [iconOldPassword, setIconOldPassword] = useState<React.ReactNode>(<EyeSlashIcon />);
	const [iconNewPassword, setIconNewPassword] = useState<React.ReactNode>(<EyeSlashIcon />);
	const [iconConfirmPassword, setIconConfirmPassword] = useState<React.ReactNode>(<EyeSlashIcon />);

	const togglePassInput = (
		inputType: 'text' | 'password',
		setInputType: React.Dispatch<React.SetStateAction<'text' | 'password'>>,
		setInputIcon: React.Dispatch<React.SetStateAction<React.ReactNode>>
	): void => {
		if (inputType === 'password') {
			setInputType('text');
			setInputIcon(<EyeIcon />);
		} else {
			setInputType('password');
			setInputIcon(<EyeSlashIcon />);
		}
	};

	return (
		<>
			<form action="" className="change_password--inner mt-4">
				<div>
					<label
						className="change_password--text_style change_password--label"
						htmlFor="acdetails-password"
					>
						{t('old_password')}
						<input
							className="change_password--input"
							type={typeOldPassword}
							value={handlePassword}
							id="old-password"
							onChange={(e) => setHandlePassword(e.target.value)}
						></input>
						<span
							onClick={() =>
								togglePassInput(typeOldPassword, setTypeOldPassword, setIconOldPassword)
							}
							className="btnIcon"
						>
							{iconOldPassword}
						</span>
					</label>

					<label
						className="change_password--text_style change_password--label"
						htmlFor="acdetails-password"
					>
						{t('new_password')}

						<input
							className="change_password--input"
							type={typeNewPassword}
							value={handleNewPassword}
							id="password"
							onChange={(e) => setHandleNewPassword(e.target.value)}
						></input>
						<span
							onClick={() =>
								togglePassInput(typeNewPassword, setTypeNewPassword, setIconNewPassword)
							}
							className="btnIcon"
						>
							{iconNewPassword}
						</span>
					</label>

					<label
						className="change_password--text_style change_password--label"
						htmlFor="acdetails-password"
					>
						{t('confirm_password')}

						<input
							className="change_password--input"
							type={typeConfirmPassword}
							value={handleNewConfirmPassword}
							id="confirm-password"
							onChange={(e) => setHandleNewConfirmPassword(e.target.value)}
						></input>
						<span
							onClick={() =>
								togglePassInput(typeConfirmPassword, setTypeConfirmPassword, setIconConfirmPassword)
							}
							className="btnIcon"
						>
							{iconConfirmPassword}
						</span>
					</label>
					<button className="change_password--btn primary__btn" type="submit">
						{t('submit')}
					</button>
				</div>
			</form>
		</>
	);
};

export default ChangePassword;
